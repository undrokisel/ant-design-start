import { Table } from 'antd';
import { pokemons } from '../data/data';
import Paragraph from 'antd/es/typography/Paragraph';

export const TablePokemons = () => {

    const dataSource = pokemons.map((pokemon, index) => {
        return {
            name: pokemon.name,
            key: index + 1,
            url: pokemon.url,
        }
    })

    const columns = [
        {
            title: "#",
            key: "number",
            dataIndex: "key",
        },
        {
            title: "name",
            key: "name",
            dataIndex: "name",
            render: (text) => <Paragraph copyable>{text}</Paragraph>,
            sorter: (a, b) => a.name.length - b.name.length,
            filters: [
                {
                    text: "grimer",
                    value: "grimer"
                },
                {
                    text: "haunter",
                    value: "haunter"
                },
                {
                    text: "hitmonchan",
                    value: "hitmonchan"
                },
            ],
            onFilter: (value, item) => item.name.includes(value)
        },
        {
            title: "url",
            key: "url",
            dataIndex: "url"
        },
    ]

    return (
        <Table
            dataSource={dataSource}
            pagination={{
                defaultCurrent: '2',
                responsive: true,
                pageSize: '5',
                showQuickJumper: true,
            }}
            columns={columns} />
    )
}