/*

    날짜 : 2024/11/25
    이름 : 최영진
    내용 : api 설계

    추가내역
    -------------
    2924-12-03 최영진 check, email 추가
    2024-12-05 강중원 배포용 주소 추가
*/

const SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

// user
export const USER_URI = `${SERVER_HOST}/user/register`;
export const USER_LOGIN_URI = `${SERVER_HOST}/user/login`;
export const USER_CHECK = `${SERVER_HOST}/user/`;
export const USER_LIST = `${SERVER_HOST}/user/list`; // 강중원 12.05 추가

export const USER_EMAIL = `${SERVER_HOST}/api`;
// article
export const BOARD_ARTICLE_WRITE_URI = `${SERVER_HOST}/article/write`;
export const BOARD_TYPE = `${SERVER_HOST}/board/type`;
export const BOARD_FAVORITE_UPDATE = `${SERVER_HOST}/favorite/board/{boardId}`;
export const BOARD_USER_FAVORITE = `${SERVER_HOST}/favorite/user`;

// product

// setting
//사용자 정보 설정화면 출력 2024/12/03 이도영
export const SETTING_USER_INFO = `${SERVER_HOST}/setting/user`;

//admin
export const ADMIN_USERLIST_INFO = `${SERVER_HOST}/admin/userlist`;

//message
export const MESSAGE_NEW_CHANNEL = `${SERVER_HOST}/message/newChannel`;
