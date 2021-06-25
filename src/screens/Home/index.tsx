import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';
import { Appointment, AppointmentData } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Load } from '../../components/Load';
import { Logout } from '../../components/Logout';
import { ModalLogout } from '../../components/ModalLogout';
import { ModalView } from '../../components/ModalView';
import { Profile } from '../../components/Profile';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function Home() {

	const navigation = useNavigation();
	const { user, signOut } = useAuth();

	const [appointments, setAppointments] = useState<AppointmentData[]>([]);
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [category, setCategory] = useState('');


	async function loadAppointments() {
		setLoading(true);
		const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
		const myAppointments: AppointmentData[] = storage ? JSON.parse(storage) : [];


		if (category) {
			const filteredAppointments = myAppointments.filter(item => item.category === category);
			setAppointments(filteredAppointments);
		} else {
			setAppointments(myAppointments);
		}
		setLoading(false);
	}

	useFocusEffect(useCallback(() => {
		loadAppointments();
	}, [category]));

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory('') : setCategory(categoryId);
	}

	function handleAppointmentDetails(appointmentSelected: AppointmentData) {
		navigation.navigate('AppointmentDetails', { appointmentSelected });
	}

	function handleAppointmentCreate() {
		navigation.navigate('AppointmentCreate')
	}

	function handleOpenModal() {
		setShowModal(true);
	}


	function handleCloseModal() {
		setShowModal(false);
	}

	return (
		<Background >
			<View style={styles.header}>
				<Profile
					userName={user.firstName}
					avatar={user.avatar}
					handleSignOut={handleOpenModal}
				/>
				<ButtonAdd onPress={handleAppointmentCreate} />
			</View>

			<View>
				<CategorySelect
					categorySelected={category}
					setCategory={handleCategorySelect}
					hasCheck={false} />
			</View>

			<View style={styles.content}>
				<ListHeader title='Partidas agendadas' subTitle={`Total ${appointments.length}`} />
			</View>
			{loading ?
				<Load />
				:
				<FlatList
					keyExtractor={item => item.id}
					data={appointments}
					style={styles.matches}
					ItemSeparatorComponent={() => <ListDivider />}
					renderItem={({ item }) => (
						<Appointment
							appointment={item}
							onPress={() => handleAppointmentDetails(item)}
						/>
					)}
				/>
			}

			<ModalLogout
				visible={showModal}
				closeModal={handleCloseModal}
				children={
					<Logout
						closeModal={handleCloseModal}
						handleLogout={signOut} />
				} />
		</Background>
	);
}