import { useState } from "react";
import { FlatList, Text, View } from "react-native";

export const VectoresScreen= () => {
    return (
        <View>
          <Text>BIENVENIDOS</Text>
          <Text>Numeros = 1,2,3,4,5,6,7,8,9,10,11,12,13,14</Text>
          <Text>Números pares:</Text>
          <FlatList
            data={numerosPares}
            renderItem={({ item }) => <Text key={item.toString()}>{item}</Text>}
          />
          <Text>Números impares:</Text>
          <FlatList
            data={numerosImpares}
            renderItem={({ item }) => <Text key={item.toString()}>{item}</Text>}
          />
        </View>
      );
};
    const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    const [numerosPares, setNumerosPares] = useState<number[]>([]);
    const [numerosImpares, setNumerosImpares] = useState<number[]>([]);
  
    const clasificarNumeros = () => {
      const numerosParesAux: number[] = [];
      const numerosImparesAux: number[] = [];
      for (const numero of numeros) {
        if (numero % 2 === 0) {
          numerosPares.push(numero);
        } else {
          numerosImpares.push(numero);
        }
      }
      setNumerosPares(numerosParesAux);
      setNumerosImpares(numerosImparesAux);
    };
  
    useState(() => {
      clasificarNumeros();
    }, );
  
    
  
  
 