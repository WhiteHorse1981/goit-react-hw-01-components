import css from './Statistics.module.css';

function getRandomHexColor() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>           
        {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map((stat) => (
                    <li className={css.item} style={{
                        backgroundColor: getRandomHexColor(),
                        }} key={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}  
            </ul>  
            
        </section>
    );
}