import LocalUserData from "../components/LocalUserData";




export default function Home() {

    // Import of userdata from LocalUserData.jsx, and use of useEffect to use the data in the component
    const userData = LocalUserData();


    return (
        <section>
            <h2>Opslag nær dig </h2>
        </section>
    );
}