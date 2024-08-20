import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuSistema from "../../SistemaMenu";
import { Button, Container, Divider,Form, FormTextArea } from "semantic-ui-react";
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';

export default function FormCategoriaProduto() {
    const [descricao, setDescricao] = useState()
    const { state } = useLocation();
    const [idCategoriaProduto, setIdCategoriaProduto] = useState();

    const navigate = useNavigate();

    
    function salvar() {
        
        let categoriaProdutoRequest = {
            descricao: descricao
        }
        if (idCategoriaProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/categoriaProduto/" + idCategoriaProduto, categoriaProdutoRequest)
            .then(response => { console.log('Categoria de produto alterada com sucesso.',JSON.stringify(response,null,2))},setTimeout(navigate('/list-categoria-produto'),5000))
            .catch(error => { console.log('Erro ao alterar uma categoria de produto.',JSON.stringify(error,null,2)) })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/categoriaProduto/", categoriaProdutoRequest)
            .then((response) => { notifySuccess('Categoria de produto cadastrada com sucesso.')
            },setTimeout(navigate('/list-categoria-produto'),5000))
            .catch((error) => { if (error.response) {
                notifyError(error.response.data.message)
            } else {
                notifyError(mensagemErro)
            } 
            
        })
    }
}
useEffect(() => {
    if (state != null && state.id != null) {
        axios.get("http://localhost:8080/api/categoriaProduto/" + state.id)
            .then((response) => {
                setIdCategoriaProduto(response.data.id)
                setDescricao(response.data.descricao)
            })
    }
    }, [state])
    return (
        <div>
            <MenuSistema />
            <Container textAlign='justified' >
                <h2> Cadastro </h2>
                <Divider />
                <Form>
                <FormTextArea required label='Descrição' value={descricao} onChange={e => setDescricao(e.target.value)} />
                    
                </Form>
                <Button color='orange' onClick={salvar}>Salvar</Button>
            </Container>
        </div>
    )
}