import React, { useEffect, useState } from 'react';
import { styles } from './styles';

import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

type Props = {
    selectGuild: (guild: GuildProps) => void;
}

export function Guilds({ selectGuild }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuild() {
        const response = await api.get('/users/@me/guilds');

        const guildsResult = response.data;
        setGuilds(guildsResult);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuild();
    }, [])

    return (
        <View style={styles.container}>
            {loading ?
                <Load />
                :
                <FlatList
                    data={guilds}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Guild data={item} onPress={() => selectGuild(item)} />
                    )}
                    ListHeaderComponent={() => <ListDivider isCentered />}
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                    showsVerticalScrollIndicator={false}
                    style={styles.guilds}
                />
            }
        </View>
    );
}