# The Bot API

**Stack utilizada:** nodejs(javascript) + mongoDB (utilizando container docker)

**Segurança:** Para melhorar a segurança, utilizo o *helmet*, pacote do nodejs que se integra ao express responsável por ajudar a proteger a API de algumas das formas mais conhecidas, através da configuração adequada do HTTP. Grande partes destas formas contam no OWASP.
### Instruções para uso

Para rodar este projeto será necessário ter o docker instalado. Para isso acesse o site https://www.docker.com/products/docker-desktop. Após a instação do docker realizada e funcional, digite na raiz deste projeto:

```sh
docker-compose up --build
``` 

Neste momento será gerado dois containers:

	- app: Este container irá conter o nodejs instalado e também conterá o código deste projeto
	- mongodb: Este container possui o mongodb instalado, para armazenar as informações do "app"

Para realizar as requisições será necessário alguma ferramenta que faça requisições, como por exemplo, o Insomnia (https://insomnia.rest/download).
### Requisições contempladas:
Para os passos abaixo, entre na ferramenta que realiza requisições, coloque a URL da ação desejada, e siga os passos.
#### Bot
*Criar Bot:* Envie um "POST" para a URL: http://localhost:3001/bots com o JSON:

```json
{
"id": "36b9f842-ee97-11e8-9443-0242ac120002",
"name": "Aureo"
}
```

*Consultar Bot:* Envie um "GET" para a URL http://localhost:3001/bots/:id (Substitua :id pelo id do Bot)

*Atualizar Bot:* Envie um "PUT" para a URL http://localhost:3001/bots/ com o JSON:

```json
{
	"id": "36b9f842-ee97-11e8-9443-0242ac120002",
	"name": "Aureo Alterado"
}
```

*Apagar Bot:* Envie um "DELETE" para a URL http://localhost:3001/bots/:id (Substitua :id pelo id do Bot)

#### Mensagens

*Criar Mensagem:* Envie um "POST" para a URL http://localhost:3001/messages com o JSON:

```json
{
 "conversationId": "7665ada8-3448-4acd-a1b7-d688e68fe9a1",
 "timestamp": "2018-11-16T23:30:52.6917722Z",
 "from": "36b9f842-ee97-11e8-9443-0242ac120002",
 "to": "16edd3b3-3f75-40df-af07-2a3813a79ce9",
 "text": "Você ainda está aí?"
}
```

*Buscar Mensagem pelo id:* Envie um "GET" para a URL http://localhost:3001/messages/:id (Substitua :id pelo id da Mensagem)

*Buscar Mensagens de uma Conversa:*  Envie um "GET" para a URL http://localhost:3001/messages?conversationId=:conversationId (Substitua :conversationId pelo id da Conversa)

### TODO
 - Implementar testes unitários (jest), cobrindo os pontos que podem gerar falhas;
 - Desacoplar o uso dos componentes express e mongoose. Desta forma em caso de mudança de tecnologia, a aplicação pode interagir através de uma interface;
 - Criar Tela de testes para estas requisições. Desta forma não será necessário a instalação de uma ferramenta para interagir com a API

### Estrutura para Produção
Por se tratar de uma API para conversa com um Bot, onde poderá haver milhares de requisições ao mesmo tempo, podemos coloca-la na nuvem. 
Desta forma podemos criar um grupo elástico com instâncias que podem ser criadas de acordo com o processamento/memória da máquina. Para banco de dados podemos considerar também alguma opção Não Relacional na nuvem, como NoSQL, considerando que o mesmo também pode ser elástico em caso de sobrecarga.

Para o Deploy, pode ser criada uma estrutura com pipelines onde passará os *testes automatizados*, *lint* e *code review* antes de efetuar o deploy em produção.