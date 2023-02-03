import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import randomColor from "randomcolor";
import { baseUrl } from '../util/Api';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [],
    datasets: [
        {
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
        },
    ],
};

export const Graph: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);

    const setStat = () => {
        const url = baseUrl + "/stat";
        axios.get(url).then((response) => {
            data.labels = response.data.map((item: { intitule: any }) => item.intitule);
            data.datasets[0].data = response.data.map((item: { pourcentage: any }) => item.pourcentage);
            data.datasets[0].backgroundColor = response.data.map(() => randomColor());
            data.datasets[0].borderColor = response.data.map(() => randomColor());

            setIsLoading(false);
        });
    }

    useEffect(() => {
        setStat();
    }, []);

    if (isLoading) {
        return (
            <p>Chargement ...</p>
        );
    } else {
        return (
            <Pie data={data} />
        );
    }
}
