Aqui está a documentação em Markdown para a API do Bem-Estar Mental:

---

# API do Bem-Estar Mental

Num mundo em constante movimento, onde a pressão e o estresse muitas das vezes nos envolvem, é comum sentir a necessidade de um refúgio para manter nossa saúde mental. Infelizmente, a falta de recursos prontamente disponíveis para promover o bem-estar mental é um desafio comum para muitos de nós.

## Visão Geral

A API do Bem-Estar Mental é um serviço que oferece quotes inspiradores e mensagens motivacionais para ajudar a promover o bem-estar mental. Imagine-a como um fiel companheiro virtual, pronto para entregar doses extras de positividade quando você mais precisar.

## Uso

### Endpoints Disponíveis

- **Route /user**: Essa é a rota de ações dos usúarios.
- **Route /therapists**: Essa é a rota de ações dos terapeutas.
- **Route /appointments**: Essa é a rota de ações dos encontros.
- **Route /reviews**: Essa é a rota de ações dos reviews.

### Exemplo de Requisição

```http
GET /user
```

### Exemplo de Resposta

```json
{
	"results": [
		{
			"id": "be7f1b77-406c-453e-b5e9-a60437b0f854",
			"name": "Exemplo",
			"email": "Exemplo@gmail.com",
			"password": "$2b$10$Mbn27VatPPeqZfAahOb95OjzJyfm7bVxWAxtlh1fbvF/Y1pmbgtxe",
			"phone": "123456790",
			"accountType": "User",
			"createdAt": "2024-03-02T19:35:11.725Z",
			"updatedAt": "2024-03-02T19:35:11.725Z"
		}
	],
	"error": false
}
```

## Casos de Uso

Esteja você se sentindo um pouco para baixo ou precisando de um impulso para enfrentar o dia, a API está à disposição para fornecer essa injeção rápida de boas vibrações. Em momentos em que a vida nos lança limões, nossa API está pronta para transformá-los em uma refrescante limonada de otimismo.

## Conclusão

Em essência, a ideia é simples: oferecer tratamentos, acompanhamentos e suporte quando necessário, tornando a jornada diária um pouco mais leve e lembrando a todos que, mesmo diante dos desafios, há sempre espaço para otimismo e motivação.

---

### Se quiser usar [teste aqui.](https://api-saudemental.onrender.com)
