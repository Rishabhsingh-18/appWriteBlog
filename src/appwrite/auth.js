    // import conf from "../conf/conf";
    // import { Client, Account, ID } from "appwrite";

    // class AuthService {
    //     constructor() {
    //         this.client = new Client()
    //             .setEndpoint(conf.appwriteUrl)
    //             .setProject(conf.appwritepid);

    //         this.account = new Account(this.client);
    //     }

    //     async createAccount({ email, password, name }) {
    //         try {
    //             const user = await this.account.create(
    //                 ID.unique(),
    //                 email,
    //                 password,
    //                 name
    //             );

    //             return user ? this.login(email, password) : user;

    //         } catch (error) {
    //             console.error("Create Account Error:", error);
    //             throw error;
    //         }
    //     }

    //     async login(email, password) {
    //         try {
    //             return await this.account.createEmailPasswordSession(email, password);
    //         } catch (error) {
    //             console.error("Login Error:", error);
    //             throw error;
    //         }  
    //     }

    //     async getCurrentUser() {
    //         try {
    //             return await this.account.get(); //
    //            /* account.get() Return in an object
    //            {
    //   "$id": "userId123",
    //   "name": "Rishabh",
    //   "email": "rishabh@gmail.com",
    //   "emailVerification": true,
    //   "prefs": {},
    //   "createdAt": "2026-02-27T..."
    // } */
    //         } catch {
    //             return null;
    //         }
    //     }

    //     async logout() {
    //         try {
    //             await this.account.deleteSession("current");
    //         } catch (error) {
    //             console.error("Logout Error:", error);
    //             throw error;
    //         }
    //     }
    // }

    // export default new AuthService();



    import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            return user ? this.login(email, password) : user;

        } catch (error) {
            console.error("Create Account Error:", error);
            throw error;
        }
    }

    async login(email, password) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch {
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSession("current");
        } catch (error) {
            console.error("Logout Error:", error);
            throw error;
        }
    }
}

export default new AuthService();
