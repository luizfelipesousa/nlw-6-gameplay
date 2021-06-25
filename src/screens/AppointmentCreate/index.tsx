import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';

import {
    ScrollView,
    KeyboardAvoidingView,
    Text,
    View,
    Platform
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CategorySelect } from '../../components/CategorySelect';
import { SmallInput } from '../../components/smallInput';
import { TextArea } from '../../components/TextArea';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';
import { GuildIcon } from '../../components/GuildIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { useNavigation } from '@react-navigation/core';

export function AppointmentCreate() {

    const [category, setCategory] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [guildSelected, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [minute, setMinute] = useState('');
    const [hour, setHour] = useState('');
    const [description, setDescription] = useState('');
    const [enable, setEnalbe] = useState(

    );

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    function handleOpenGuild() {
        setShowModal(true);
    }

    function handleCloseGuild() {
        setShowModal(false);
    }

    function handleGuildSelected(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setShowModal(false);
    }

    const navigation = useNavigation();

    async function handleSchedule() {
        const newAppointment = {
            id: uuid.v4(),
            guild: guildSelected,
            category,
            date: `${day.padStart(2, '0')}/${month.padStart(2, '0')} at ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}h`,
            description
        }

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment]));

        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Background>
                <Header
                    title="Schedule match"
                />
                <ScrollView >
                    <View >

                        <Text style={styles.label}>
                            Categoria
                        </Text>

                        <CategorySelect
                            setCategory={handleCategorySelect}
                            categorySelected={category}
                            hasCheck
                        />

                        <View style={styles.form}>
                            <RectButton onPress={handleOpenGuild}>
                                <View style={styles.select}>
                                    {
                                        guildSelected.id ?
                                            <GuildIcon iconId={guildSelected.icon} guildId={guildSelected.id} /> :
                                            <View style={styles.imageServer} />
                                    }

                                    <View style={styles.selectBody}>
                                        <Text style={styles.serverLabel}>
                                            {
                                                guildSelected.id ?
                                                    guildSelected.name :
                                                    'Select a server'
                                            }

                                        </Text>
                                        <Feather
                                            name="chevron-right"
                                            size={18}
                                            color={theme.colors.heading} />

                                    </View>
                                </View>
                            </RectButton>

                            <View style={styles.dateSchedule}>
                                <View style={styles.field}>
                                    <Text style={styles.serverLabel}>
                                        Day and month
                                    </Text>
                                    <View style={styles.column}>
                                        <SmallInput
                                            onChangeText={setDay}
                                            maxLength={2}
                                            keyboardType='numeric' />
                                        <Text style={styles.divisor}>
                                            /
                                        </Text>
                                        <SmallInput
                                            onChangeText={setMonth}
                                            maxLength={2}
                                            keyboardType='numeric' />
                                    </View>
                                </View>

                                <View style={styles.field}>
                                    <Text style={styles.serverLabel}>
                                        Hour
                                    </Text>
                                    <View style={styles.column}>
                                        <SmallInput
                                            onChangeText={setHour}
                                            maxLength={2}
                                            keyboardType='numeric' />
                                        <Text style={styles.divisor}>
                                            :
                                        </Text>
                                        <SmallInput
                                            onChangeText={setMinute}
                                            maxLength={2}
                                            keyboardType='numeric' />
                                    </View>
                                </View>
                            </View>

                            <TextArea
                                onChangeText={setDescription}
                                multiline
                                numberOfLines={5}
                                autoCorrect={false}
                                maxLength={100}
                            />
                            <View style={styles.footer}>
                                <ButtonIcon
                                    isEnable={day != '' && month != '' && minute != '' && hour != '' && description != ''}
                                    title="Schedule"
                                    icon={false}
                                    onPress={handleSchedule} />
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <ModalView
                    visible={showModal}
                    closeModal={handleCloseGuild}
                    children={
                        <Guilds selectGuild={handleGuildSelected} />
                    } />
            </Background>
        </KeyboardAvoidingView>
    );
}
