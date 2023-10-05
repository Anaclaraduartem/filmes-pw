import styles from './Marvel.module.scss';
import logoo from '../../assets/marvel/logoo.jpg';

export default function Marvel(){
    const [busca,setBusca] = useState("");
    
    return(
        <main className={styles.bg}>
            <nav className={styles.menu}>
                
            </nav>
         
<section>
    <h3>Filmes</h3>
    <Buscador busca ={busca} setBusca = {setBusca}/>
</section>
        </main>
    );
}
