import { useEffect, useState } from "react"

const useEquipment = () => {
    const [equipments, setEquipment] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/equipment')
            .then(response => response.json())
            .then(data => setEquipment(data))
    }, [])

    return [equipments]
}
export default useEquipment