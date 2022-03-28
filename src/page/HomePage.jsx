import { Hero } from "components/Hero/Hero";
import { Modal } from "components/Modal/Modal";
import { Specifics } from "components/Specifics/Specifics";
import { useState } from 'react';

export function Home() {
     const [modal, setModal] = useState(false);
    return (
        <main>
            <Hero onClick={ setModal}/>
            {modal && < Modal onClick={setModal} />}
            <Specifics/>
        </main>
    )
}