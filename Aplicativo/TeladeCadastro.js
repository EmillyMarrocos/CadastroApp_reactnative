import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const TeladeCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');

  const buscarEnderecoporCEP = async () => {
    try {
      const response = await axios.get('https://viacep.com.br/ws/${cep}/json');
      const data = response.data;
      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado');
        return;
      }
      setEndereco(data.logradouro);
      setBairro(data.bairro);
      setEstado(data.uf);
    } catch (error) {
      Alert.alert('Erro ao buscar o CEP!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput 
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite seu CEP"
        keyboardType="numeric"
        onBlur={buscarEnderecoporCEP}
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite seu endereço"
      />

      <Text style={styles.label}>Número</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={setNumero}
        placeholder="Digite o número do endereço"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Complemento</Text>
      <TextInput
        style={styles.input}
        value={complemento}
        onChangeText={setComplemento}
        placeholder="Digite o complemento"
      />

      <Text style={styles.label}>Bairro</Text>
      <TextInput
        style={styles.input}
        value={bairro}
        onChangeText={setBairro}
        placeholder="Digite o bairro"
      />

      <Text style={styles.label}>Estado</Text>
      <Picker
        selectedValue={estado}
        onValueChange={(itemValue) => setEstado(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um estado" value="" />
        <Picker.Item label="Acre" value="AC" />
        <Picker.Item label="Alagoas" value="AL" />
        <Picker.Item label="Amapá" value="AP" />
        <Picker.Item label="Amazonas" value="AM" />
        <Picker.Item label="Bahia" value="BA" />
        <Picker.Item label="Ceará" value="CE" />
        <Picker.Item label="Distrito Federal" value="DF" />
        <Picker.Item label="Espírito Santo" value="ES" />
        <Picker.Item label="Goiás" value="GO" />
        <Picker.Item label="Maranhão" value="MA" />
        <Picker.Item label="Mato Grosso" value="MT" />
        <Picker.Item label="Mato Grosso do Sul" value="MS" />
        <Picker.Item label="Minas Gerais" value="MG" />
        <Picker.Item label="Pará" value="PA" />
        <Picker.Item label="Paraíba" value="PB" />
        <Picker.Item label="Paraná" value="PR" />
        <Picker.Item label="Pernambuco" value="PE" />
        <Picker.Item label="Piauí" value="PI" />
        <Picker.Item label="Rio de Janeiro" value="RJ" />
        <Picker.Item label="Rio Grande do Norte" value="RN" />
        <Picker.Item label="Rio Grande do Sul" value="RS" />
        <Picker.Item label="Rondônia" value="RO" />
        <Picker.Item label="Roraima" value="RR" />
        <Picker.Item label="Santa Catarina" value="SC" />
        <Picker.Item label="São Paulo" value="SP" />
        <Picker.Item label="Sergipe" value="SE" />
        <Picker.Item label="Tocantins" value="TO" />
      </Picker>

      <Button title="Cadastrar" onPress={() => Alert.alert('Cadastro realizado com sucesso!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 5
  },
  picker: {
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5
  },
});

export default TeladeCadastro;