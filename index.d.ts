export default class RNKakao {
    public static login(): Promise<KakaoUser>

    public static logout(): Promise<{}>

    public static userInfo(): Promise<KakaoUser>
}

export interface KakaoUser {
    id: string
    accessToken: string
    nickname: string | null
    email: string | null
    profileImage: string | null
    profileImageThumbnail: string | null
    ageRange: string | null
    gender: string | null
}
