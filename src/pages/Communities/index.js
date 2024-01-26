import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function Communities(){

  const [my_communities, setCommunities] = useState([]);
  const navigate = useNavigate();

  // read, busca todos os registros na api
  useEffect(() => {
    api.get('api/v1/communities',{})
    .then(response => {setCommunities(response.data)})
  }, []);

  // update, navega para NewUpdate
  async function updateCommunity(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert('Erro ao acessar NewUpdate');      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Communities Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Projeto</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_communities.map(community => (
              <tr key={community.id}>
                <th scope="row">{community.id}</th>
                <td>{community.name}</td>
                <td>{community.project}</td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateCommunity(community.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger" style={{margin: '2px'}}>Excluir</button>

                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}

