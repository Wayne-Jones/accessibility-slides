import Chart from 'chart.js/auto'

(async function () {
    Chart.defaults.font.size = 20;
    const data1 = [
        { label: "People without Disabilities", count: 278000000 },
        { label: "People with Disabilities", count: 42000000 },
    ];
    const data2 = [
        { label: "People with Visual Impairments", count: 11000000 },
        { label: "People with Hearing Impairments", count: 8000000 },
        { label: "People with Other Disability Impairments", count: 23000000 },
    ];

    const data3 = [
        { label: "December 2010", count: 67 },
        { label: "May 2012", count: 72 },
        { label: "January 2014", count: 82 },
        { label: "July 2015", count: 69 },
        { label: "October 2017", count: 88 },
        { label: "September 2019", count: 86 },
        { label: "June 2021", count: 90 },
    ];

    const data4 = [
        { label: "JAWS", count: 70.0 },
        { label: "NVDA", count: 58.8 },
        { label: "Voiceover", count: 41.3 },
        { label: "Narrator", count: 36.8 },
        { label: "ZoomText", count: 8.9 },
        { label: "ChromeVox", count: 4.7 },
        { label: "SA or SA to Go", count: 3.0 },
        { label: "Window-Eyes", count: 1.5 },
        { label: "Other", count: 6.3 },
    ];


    const data5 = [
        { label: "Voiceover", count: 71.5 },
        { label: "TalkBack", count: 29.1 },
        { label: "Voice Assistant", count: 7.6 },
        { label: "Commentary/Jieshuo", count: 6.6 },
        { label: "VoiceView", count: 6.1 },
        { label: "Mobile Accessibility", count: 3.4 },
        { label: "Other", count: 5.3 },
    ];

    new Chart(
        document.getElementById('acs1'),
        {
            type: 'doughnut',
            data: {
                labels: data1.map(row => row.label),
                datasets: [
                    {
                        label: 'Number of People',
                        data: data1.map(row => row.count),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                        ],
                    }
                ]
            }
        }
    );
    new Chart(
        document.getElementById('acs2'),
        {
            type: 'doughnut',
            data: {
                labels: data2.map(row => row.label),
                datasets: [
                    {
                        label: 'Number of People',
                        data: data2.map(row => row.count),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                    }
                ]
            }
        }
    );
    new Chart(
        document.getElementById('webaim1'),
        {
            type: 'line',
            data: {
                labels: data3.map(row => row.label),
                datasets: [
                    {
                        label: 'Percent of People',
                        data: data3.map(row => row.count),
                        backgroundColor: [
                            'rgb(255, 0, 0)'
                        ],
                        borderColor: [
                            'rgba(0, 0, 0, .8)'
                        ]
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: 'Mobile Screen Reader Usage'
                    }
                },
                scales: {
                    y: {
                        suggestedMin: 40,
                        suggestedMax: 100
                    }
                }
            },
        }
    );
    new Chart(
        document.getElementById('webaim2'),
        {
            type: 'bar',
            data: {
                labels: data4.map(row => row.label),
                datasets: [
                    {
                        label: 'Percent of Respondents',
                        data: data4.map(row => row.count),
                        backgroundColor: [
                            '#4dc9f6',
                            '#f67019',
                            '#f53794',
                            '#537bc4',
                            '#acc236',
                            '#166a8f',
                            '#00a950',
                            '#58595b',
                            '#8549ba'
                        ],
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Screen Readers Commonly Used (Desktop)'
                    }
                },
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            },
        }
    );
    new Chart(
        document.getElementById('webaim3'),
        {
            type: 'bar',
            data: {
                labels: data5.map(row => row.label),
                datasets: [
                    {
                        label: 'Percent of Respondents',
                        data: data5.map(row => row.count),
                        backgroundColor: [
                            '#4dc9f6',
                            '#f67019',
                            '#f53794',
                            '#537bc4',
                            '#acc236',
                            '#166a8f',
                            '#00a950',
                            '#58595b',
                            '#8549ba'
                        ],
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Screen Readers Commonly Used (Mobile)'
                    }
                },
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            },
        }
    );
})();