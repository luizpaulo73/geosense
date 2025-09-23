import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../context/ThemeContext'

type Moto = {
  id: string
  placa: string
  modelo: string
  situacao: {
    status: string
    tipoProblema: string
  }
  dataEntrada: string
  dataSaida: string
}

type Vaga = {
  idVaga: string
  ocupada: boolean
  setor: string
  moto: Moto
}

export default function Setor(props: { area: string }) {
  const { area } = props
  const { theme } = useTheme()

  const [vagas, setVagas] = useState<Vaga[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarVagas() {
      try {
        const res = await fetch('http://10.0.2.2:3000/vagas') // Android emulador
        // no iOS pode usar http://localhost:3000/vagas
        const data = await res.json()
        setVagas(data)
      } catch (err) {
        console.log('Erro ao carregar vagas:', err)
      } finally {
        setLoading(false)
      }
    }

    carregarVagas()
  }, [])

  const vagasFiltradas = vagas.filter(v => v.setor === area)
  const disponiveis = vagasFiltradas.filter(v => !v.ocupada).length

  return (
    <View style={[style.setor, { backgroundColor: theme.subBackground }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={[style.textSetor, { color: theme.text }]}>Setor - {area}</Text>
        <Text style={[style.textDisponiveis, { color: theme.text }]}>
          {disponiveis} Disponíveis
        </Text>
      </View>

      <View style={style.viewVagas}>
        {loading ? (
          <Text style={{ color: theme.text }}>Carregando...</Text>
        ) : (
          vagasFiltradas.map(vaga => (
            <View
              key={vaga.idVaga}
              style={[
                style.vaga,
                { backgroundColor: vaga.ocupada ? '#FF0000' : '#00CCCF' }
              ]}
            >
              <Text style={style.nrVaga}>{vaga.idVaga}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  setor: {
    borderWidth: 0.5,
    borderColor: '#94A3B8',
    width: '90%',
    borderRadius: 5
  },
  textSetor: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'K2D_700Bold',
    padding: 5
  },
  textDisponiveis: {
    fontSize: 14,
    fontFamily: 'K2D_400Regular',
    borderWidth: 0.5,
    borderColor: '#94A3B8',
    borderRadius: 100,
    width: 110,
    height: 25,
    margin: 10,
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  viewVagas: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    gap: 5
  },
  vaga: {
    backgroundColor: '#FF0000',
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#94A3B8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  nrVaga: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'K2D_700Bold'
  }
})
