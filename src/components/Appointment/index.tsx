import React from "react";

import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { GuildIcon } from "../GuildIcon";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { categories } from "../../utils/categories";


import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = RectButtonProps & {
    appointment: AppointmentData
}

export interface AppointmentData {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

export interface GuildProps {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
}

export function Appointment({ appointment, ...rest }: Props) {

    const [appointmentCategory] = categories.filter(item => item.id === appointment.category);

    const isOwner = appointment.guild.owner;
    const { primary, on, secondary50, secondary70 } = theme.colors;

    return (
        <RectButton {...rest} >

            <View style={styles.container}>
                <LinearGradient
                    style={styles.guilIconContainer}
                    colors={[secondary50, secondary70]}>
                    <GuildIcon
                        iconId={appointment.guild.icon}
                        guildId={appointment.guild.id} />
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>
                            {appointment.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {appointmentCategory.title}
                        </Text>
                    </View>


                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg fill={primary} />
                            <Text style={styles.date}>
                                {appointment.date}
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={isOwner ? primary : on} />

                            <Text style={[styles.player, { color: isOwner ? primary : on }]}>
                                {isOwner ? 'Host' : 'Visitor'}
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        </RectButton >
    );
}