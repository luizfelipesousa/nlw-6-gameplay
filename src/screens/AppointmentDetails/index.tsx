import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
    FlatList,
    ImageBackground,
    Text,
    View,
    Share,
    Platform
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { AppointmentData } from '../../components/Appointment';
import { Member, MemberProps } from '../../components/Member';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Load } from '../../components/Load';
import * as Linking from 'expo-linking';

import { api } from '../../services/api';
import { Alert } from 'react-native';


interface AppointmentProps {
    appointmentSelected: AppointmentData;
}

interface guildWidget {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export function AppointmentDetails() {

    const route = useRoute();
    const { appointmentSelected } = route.params as AppointmentProps;
    const [loading, setLoading] = useState(false);
    const [widget, setWidget] = useState<guildWidget>({} as guildWidget);

    async function fetchGuildWidget() {
        try {
            setLoading(true);
            const response = await api.get(`/guilds/${appointmentSelected.guild.id}/widget.json`);
            setWidget(response.data);

        } catch (error) {
            Alert.alert('Verify the server settings. Is the Widget server setting is enabled?');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios' ?
            `Junte-se a ${appointmentSelected.guild.name}` : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite,
        })
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildWidget();
    }, [])

    return (
        <Background>
            <Header
                title="Details"
                action={
                    <BorderlessButton>
                        {
                            widget.instant_invite ?
                                <Fontisto
                                    size={24}
                                    name="share"
                                    color={theme.colors.primary}
                                    onPress={handleShareInvitation}
                                /> :
                                <View
                                    style={{
                                        width: 24,
                                        height: 24,
                                    }}
                                />
                        }
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{appointmentSelected.guild.name}</Text>
                    <Text style={styles.subtitle}>{appointmentSelected.description}</Text>
                </View>

            </ImageBackground>
            {
                loading ?
                    <Load />
                    :
                    <>
                        <ListHeader
                            title="Jogadores"
                            subTitle={`Total ${widget.presence_count | 0}`} />

                        <FlatList
                            style={styles.members}
                            keyExtractor={item => item.id}
                            data={widget.members}
                            ItemSeparatorComponent={() => <ListDivider isCentered />}
                            renderItem={({ item }) => (
                                <Member
                                    memberInfo={item}
                                />
                            )}
                        />

                        <View style={styles.footer}>
                            {
                                widget.instant_invite &&
                                <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
                            }

                        </View>
                    </>
            }


        </Background>
    );
}
