import LoginSystem from "../components/LoginSystem";
import SignInWithGoogle from "../components/SignInWithGoogle";
import SignInWithFacebook from "../components/SignInWithFacebook";
import "../pages/pageCss/LoginPage.css";
export default function LoginPage() {
    return (
        <main>
            <div className="headingWrap">
                <h2>Log på <span className="lendrHeading">Lendr</span></h2>
            </div>
            <div className="soMeLoginWrapper">
                <SignInWithGoogle />
                <SignInWithFacebook />
            </div>
            <hr className="loginpageHr" />

            <LoginSystem />

        </main>
    )
}