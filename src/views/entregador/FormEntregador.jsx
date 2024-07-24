import axios from "axios"
import React, { useEffect, useState } from "react"
import InputMask from "react-input-mask"
import { Link, useLocation } from "react-router-dom/dist"
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react"
import MenuSistema from "../../SistemaMenu"
import { mensagemErro, notifyError, notifySuccess } from "../util/Util"

const estados = [
  { key: "0", text: "Acre", value: "acre" },
  { key: "1", text: "Paraíba", value: "paraiba" },
  { key: "2", text: "Pernambuco", value: "pernambuco" },
]

export default function FormEntregador() {
  const { state } = useLocation()
  const [idEntregador, setIdEntregador] = useState()
  const [nome, setNome] = useState()
  const [cpf, setCpf] = useState()
  const [rg, setRg] = useState()
  const [dataNascimento, setDataNascimento] = useState()
  const [foneCelular, setFoneCelular] = useState()
  const [foneFixo, setFoneFixo] = useState()
  const [qtdEntregas, setQtdEntregas] = useState()
  const [valorFrete, setValorFrete] = useState()
  const [rua, setRua] = useState()
  const [numeroRua, setNumeroRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [cep, setCep] = useState()
  const [uf, setUf] = useState()
  const [complemento, setComplemento] = useState()

  function salvar() {
    let entregadorRequest = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      foneCelular: foneCelular,
      foneFixo: foneFixo,
      qtdEntregas: qtdEntregas,
      valorFrete: valorFrete,
      rua: rua,
      numeroRua: numeroRua,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
      uf: uf,
      complemento: complemento,
    }
    if (idEntregador != null) {
      //Alteração:
      axios
        .put(
          "http://localhost:8080/api/entregador/" + idEntregador,
          entregadorRequest
        )
        .then((response) => {
          console.log("Entregador alterado com sucesso.")
        })
        .catch((error) => {
          console.log("Erro ao alter um entregador.")
        })
    } else {
      //Cadastro:
      axios
        .post("http://localhost:8080/api/entregador", entregadorRequest)
        .then((response) => {
          notifySuccess("Entregador cadastrado com sucesso.")
        })
        .catch((error) => {
          if (error.response) {
            notifyError(error.response.data.message)
            } else {
            notifyError(mensagemErro)
            }             
        })
    }
    console.log(entregadorRequest)
  }

  function formatarData(dataParam) {
    if (dataParam === null || dataParam === "" || dataParam === undefined) {
      return ""
    }

    let arrayData = dataParam.split("-")
    return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0]
  }

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/entregador/" + state.id)
        .then((response) => {
          setIdEntregador(response.data.id)
          setNome(response.data.nome)
          setCpf(response.data.cpf)
          setRg(response.data.rg)
          setDataNascimento(formatarData(response.data.dataNascimento))
          setFoneCelular(response.data.foneCelular)
          setFoneFixo(response.data.foneFixo)
          setQtdEntregas(response.data.qtdEntregas)
          setValorFrete(response.data.valorFrete)
          setRua(response.data.rua)
          setNumeroRua(response.data.numeroRua)
          setBairro(response.data.bairro)
          setCidade(response.data.cidade)
          setCep(response.data.cep)
          setUf(response.data.uf)
          setComplemento(response.data.complemento)
        })
    }
  }, [state])

  return (
    <div>
      <MenuSistema tela={"entregador"} />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign='justified'>
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Entregador &nbsp;
              <Icon
                name='angle double right'
                size='small'
              />{" "}
            </span>{" "}
            Cadastro{" "}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Nome'
                  maxLength='100'
                  width={12}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  label='CPF'
                  width={6}
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                >
                  <InputMask
                    required
                    mask='999.999.999-99'
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label='RG'
                  width={6}
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                >
                  <InputMask
                    mask='9.999.999'
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label='Data Nascimento'
                  width={6}
                >
                  <InputMask
                    mask='99/99/9999'
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </Form.Input>
                <Form.Input
                  required
                  fluid
                  label='Fone celular'
                  width={6}
                  value={foneCelular}
                  onChange={(e) => setFoneCelular(e.target.value)}
                >
                  <InputMask
                    required
                    mask='(99) 9999.9999'
                    onChange={(e) => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label='Fone Fixo'
                  width={6}
                  value={foneFixo}
                  onChange={(e) => setFoneFixo(e.target.value)}
                >
                  <InputMask
                    mask='(99) 9999.9999'
                    onChange={(e) => setFoneFixo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label='Entregas Realizadas'
                  width={4}
                  value={qtdEntregas}
                  onChange={(e) => setQtdEntregas(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Valor por frete'
                  width={4}
                  value={valorFrete}
                  onChange={(e) => setValorFrete(e.target.value)}
                ></Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label='Rua'
                  width={14}
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Número'
                  width={3}
                  value={numeroRua}
                  onChange={(e) => setNumeroRua(e.target.value)}
                ></Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label='Bairro'
                  width={9}
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Cidade'
                  width={9}
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                ></Form.Input>
                <Form.Input
                  fluid
                  label='CEP'
                  width={9}
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                >
                  <InputMask
                    required
                    mask='99.999-999'
                    onChange={(e) => setCep(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Select
                fluid
                label='UF'
                options={estados}
                placeholder='Selecione'
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                F
              />

              <Form.Input
                label='Complemento'
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              ></Form.Input>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Button
                type='button'
                inverted
                circular
                icon
                labelPosition='left'
                color='orange'
              >
                <Icon name='reply' />
                <Link to={"/list-entregador"}>Voltar</Link>
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition='left'
                color='blue'
                floated='right'
                onClick={() => salvar()}
              >
                <Icon name='save' />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
