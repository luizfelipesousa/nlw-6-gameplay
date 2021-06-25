import React,
{
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';

const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

import { api } from '../services/api';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS, COLLECTION_USER } from '../configs/database';

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextProps = {
    user: User;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
    loading: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
    children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: Error;
    };
    type: string;
}

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

            if (type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;

                const userInfo = await api.get('/users/@me');

                const firstName = userInfo.data.username.split(' ')[0];

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}`

                const userData = { ...userInfo.data, firstName, token: params.access_token };

                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))

                setUser(userData);
            }

        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }
    }

    async function signOut() {

        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USER);
        await AsyncStorage.removeItem(COLLECTION_APPOINTMENTS);

    }

    async function loadUserDataStorage() {
        const logginInfo = await AsyncStorage.getItem(COLLECTION_USER);

        if (logginInfo) {
            const userLogged = JSON.parse(logginInfo) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
            setUser(userLogged);
        }
    }

    useEffect(() => {
        loadUserDataStorage();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}