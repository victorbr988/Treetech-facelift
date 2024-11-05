export interface ITransportMessage<T> {
  send(transporterDto: T): Promise<void>;
}
