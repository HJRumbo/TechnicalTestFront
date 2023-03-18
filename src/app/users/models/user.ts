export interface ResponseApi {
    items: User[] 
}

export class User {
    login!: string;
    html_url!: string;
    repos_url!: string;
    type!: string;
}