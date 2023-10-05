import styles from './Marvel.module.scss';
import { useState } from 'react';


export default function Buscador(){
  
    const [busca,setBusca] = useState("");
    return(
        <main className={styles.bg}>
            <nav className={styles.menu}>
                
            </nav>
<section>
    <h3>Filmes</h3>
    <Buscador busca ={busca} setBusca={setBusca} /> 
</section>
        </main>
    );
}
// dando erro,tentar arrumar