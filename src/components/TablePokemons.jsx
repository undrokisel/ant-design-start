import { Table } from 'antd';
import { pokemons } from '../data/data';
import Paragraph from 'antd/es/typography/Paragraph';

export const TablePokemons = () => {

    const dataSource = pokemons.map((pokemon, index) => {
        return {
            name: pokemon.name,
            key: index,
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
        },
        {
            title: "url",
            key: "url",
            dataIndex: "url"
        },
    ]

    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}