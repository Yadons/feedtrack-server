import { DomainException } from "@shared/domain/domain.exception";

class ProdutoException extends DomainException {
    constructor(message:string = '⚠️ Exceção de Domínio Genérica da Entidade Produto') {
        super(message);
        this.name = 'ProdutoException'
        this.message = message;
    }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O nome do produto não possui um tamanho mínimo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O nome do produto não possui um tamanho máximo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ A descrição do produto não possui um tamanho mínimo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ A descrição do produto não possui um tamanho máximo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class ValorMinimoProdutoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O valor mínimo do produto é inválido.') {
        super(message);
        this.name = 'ValorMinimoProdutoInvalido'
        this.message = message;
    }
}

class EstoqueMinimoProdutoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O estoque mínimo do produto é inválido.') {
        super(message);
        this.name = 'EstoqueMinimoProdutoInvalido'
        this.message = message;
    }
}









const ProdutoExceptions = {
    ProdutoException: ProdutoException,
    NomeProdutoTamanhoMinimoInvalido: NomeProdutoTamanhoMinimoInvalido,
    NomeProdutoTamanhoMaximoInvalido: NomeProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhoMinimoInvalido: DescricaoProdutoTamanhoMinimoInvalido,
    DescricaoProdutoTamanhoMaximoInvalido: DescricaoProdutoTamanhoMaximoInvalido,
    ValorMinimoProdutoInvalido: ValorMinimoProdutoInvalido,
    EstoqueMinimoProdutoInvalido: EstoqueMinimoProdutoInvalido,
    
}


export {
    ProdutoExceptions
}