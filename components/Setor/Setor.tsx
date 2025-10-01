import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
  chassi?: string | null
}

type Vaga = {
  idVaga: string
  ocupada: boolean
  setor: string
  moto: Moto | null
  id: string
}

export default function Setor(props: { area: string, onSelecionarVaga?: (id: string) => void, vagaSelecionada?: string }) {
  const { area, onSelecionarVaga, vagaSelecionada } = props
  const { theme } = useTheme()
  const [vagas, setVagas] = useState<Vaga[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarVagas() {
      try {
        const res = await fetch('http://10.0.2.2:3000/vagas')
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
          vagasFiltradas.map(vaga => 
            vaga.ocupada ? (
              <View
                key={vaga.id}
                style={[
                  style.vaga,
                  { backgroundColor: '#FF0000', opacity: 0.6 }
                ]}
              >
                <Text style={style.nrVaga}>{vaga.idVaga}</Text>
              </View>
            ) : (
              <TouchableOpacity
                key={vaga.id}
                style={[
                  style.vaga,
                  { 
                    backgroundColor: vagaSelecionada === vaga.id ? '#007F80' : '#00CCCF', 
                    borderWidth: vagaSelecionada === vaga.id ? 2 : 0.5,
                    borderColor: '#007F80'
                  }
                ]}
                onPress={() => onSelecionarVaga && onSelecionarVaga(vaga.id)}
              >
                <Text style={style.nrVaga}>{vaga.idVaga}</Text>
              </TouchableOpacity>
            )
          )
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