import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const navigate = useNavigate();

  // community_id definido na rota NewUpdate
  const {community_id} = useParams();

  // recebe e manipula eventos do form
  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, project};

    if (community_id === '0') {
      try {
        await api.post('api/v1/communities', data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao salvar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/communities/${community_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao atualizar');        
      }      
    }
  }

  // carrega elemento especifico da api
  async function loadCommunity(){
    try {
      const response = await api.get(`api/v1/communities/${community_id}`,{});
      setName(response.data.name);
      setProject(response.data.project);
    } catch (error) {
      alert('erro ao atualizar');
      navigate('/');      
    }
  }

  // chama loadCommunity e preenche o form
  useEffect(() => {
    if (community_id === '0') {
      return;      
    } else {
      loadCommunity();      
    }
  }, [community_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Communities Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="project">Projeto</label>
            <input data-testid="input2" id="project" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Projeto" value={project}
            onChange={e => setProject(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}