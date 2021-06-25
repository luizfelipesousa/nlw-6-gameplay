import React from 'react';
import { Image, View } from 'react-native';

import DiscordSVG from '../../assets/discord.svg';

import { styles } from './styles';

const { CDN_IMAGE } = process.env;

interface Props {
    guildId: string;
    iconId: string;
}

export function GuildIcon({ guildId, iconId }: Props) {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    // const uri = 'https://images-americanas.b2w.io/produtos/01/00/img/1946892/1/1946892100_1GG.jpg';

    return (
        <View style={styles.container}>
            {
                iconId ?
                    <Image
                        style={styles.image}
                        source={{ uri }}
                        resizeMode="cover"
                    />
                    :
                    < DiscordSVG
                        width={40}
                        height={40}
                    />
            }
        </View>
    );
}