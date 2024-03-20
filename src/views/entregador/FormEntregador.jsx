import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormTextArea, Icon } from 'semantic-ui-react';

const estados = [
    { key: '0', text: 'Acre', value: 'acre' },
  { key: '1', text: 'Paraíba', value: 'paraiba' },
  { key: '2', text: 'Pernambuco', value: 'pernambuco' },
]

export default function FormEntregador() {


    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={12}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                    width={6}>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                        
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={6}>
                                     
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                            <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    maxLength="100"
                                    width={5}
                                    placeholder='Ex:20/10/1985'
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone celular'
                                    width={6}>
                                    <InputMask
                                        required
                                        mask="(99) 9999.9999"
                                    /> 
                                        
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Entregas Realizadas'
                                    width={4}>
                                     
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor por frete'
                                    width={4}>
                                     
                                </Form.Input>


                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                fluid
                                label='Rua'
                                width={14}>
                                </Form.Input>

                                <Form.Input
                                fluid
                                label='Número'
                                width={3}>

                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                fluid
                                label='Bairro'
                                width={9}
                                >
                                </Form.Input>
                                
                                <Form.Input
                                fluid
                                label='Cidade'
                                width={9}>

                                </Form.Input>
                                <Form.Input
                                fluid
                                label='CEP'
                                width={9}>
                                    <InputMask
                                        required
                                        mask="99.999-9  99"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Select
                                    fluid
                                    label='UF'
                                    options={estados}
                                    placeholder='Selecione'
                                />
                            
                            <Form.Input
                            label='Complemento'
                            ></Form.Input>

                            
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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