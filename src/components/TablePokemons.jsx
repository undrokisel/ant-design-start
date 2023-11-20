import { Table } from 'antd';
import { pokemons } from '../data/data';




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
            key: "numder",
            dataIndex: "key"
        },
        {
            title: "name",
            key: "name",
            dataIndex: "name"
        },
        {
            title: "url",
            key: "url",
            dataIndex: "url"
        },
    ]

    return (
        <Table 
        
        dataSource={dataSource} columns={columns} />
    )
}