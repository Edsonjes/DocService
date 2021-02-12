import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ContratoListView from 'src/views/contartos/ContratosListView'
import Cadastro from 'src/views/contartos/ContratosListView/Cadastro'
import ClientesListView from 'src/views/Clientes/ClientesListView'
import CadastroClientes from 'src/views/Clientes/ClientesListView/cadastroClientes'
import { element } from 'prop-types';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'contratos', element: <ContratoListView /> },
      { path: 'cadastro', element: < Cadastro/> },
      {path:'cadastro-cliente', element:<CadastroClientes/>},
      { path: 'clientes', element: <ClientesListView/> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
