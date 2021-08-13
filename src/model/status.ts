
enum TransactionStatus {
    created = "Solicitada" as any,
    processing = "Processando" as any,
    processed = "Concluida" as any,
    empty = "" as any
}

export const getTransactionStatusName = (status: string) => {
    const key = ((status as unknown) as TransactionStatus);
    if (key) {
        return TransactionStatus[key];
    }

    return TransactionStatus.empty;
}