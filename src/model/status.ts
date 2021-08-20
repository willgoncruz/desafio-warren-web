/**
 * Enum utilizado para representar o status de uma transação
 * Foi escolhido enum para limitar (enumerar) os possível estados, já que estes pertencem a um grupo finito de possibilidades.
 * Também é utilizado para fazer o deparam de valor do status para o nome exibível para o usuário.
 */
export enum TransactionStatus {
    created = "Solicitada" as any,
    processing = "Processando" as any,
    processed = "Concluída" as any,
    empty = "" as any
}

export const getTransactionStatusName = (status: TransactionStatus) => {
    const key = ((status as unknown) as TransactionStatus);
    if (key) {
        return (TransactionStatus[key] as unknown) as TransactionStatus;
    }

    return TransactionStatus.empty;
}

export const getStatusListOfValues = () => {
    return [TransactionStatus.created, TransactionStatus.processing, TransactionStatus.processed]
}