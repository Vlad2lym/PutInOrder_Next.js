import dynamic from "next/dynamic";
import MainLayout from "../components/layouts/mainLayout";

export default function Game() {
    const DynamicGameArea = dynamic(() => import('../components/game/gameArea'), {
        ssr: false
    })
    
    return (
        <MainLayout>
            <DynamicGameArea/>
        </MainLayout>
    )
}