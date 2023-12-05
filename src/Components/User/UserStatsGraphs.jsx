import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    setGraph(graphData);
  }, [data]);
  const customColorScale = [
    '#ff5733',
    '#ffa233',
    '#ffdb33',
    '#a7ff33',
    '#33ff57',
  ]; // Define sua escala de cores personalizada

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={60}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
          colorScale={customColorScale}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar
            alignment="start"
            data={graph}
            style={{
              data: {
                fill: '#0000FF',
                stroke: '#0000FF',
              },
              labels: {
                fontSize: 14,
                fill: '#333',
              },
              parent: {
                borderRadius: 10, // Defina o border-radius desejado aqui
              },
            }}
          ></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
