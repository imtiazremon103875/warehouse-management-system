import { useEffect, useState } from "react"

const useEquipment = () => {
    const [equipments, setEquipment] = useState([])

    useEffect(() => {

        fetch('https://pure-reaches-06573.herokuapp.com/equipment')
            .then(response => response.json())
            .then(data => setEquipment(data))
    }, [])

    return [equipments, setEquipment]
}
export default useEquipment