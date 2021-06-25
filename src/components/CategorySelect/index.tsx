import React from 'react';
import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

import { styles } from './styles';

interface Props {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheck: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheck }: Props) {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        icon={category.icon}
                        title={category.title}
                        hasCheck={hasCheck}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    );
}