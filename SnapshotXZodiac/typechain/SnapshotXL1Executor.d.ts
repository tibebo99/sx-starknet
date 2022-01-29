/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SnapshotXL1ExecutorInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR_TYPEHASH()": FunctionFragment;
    "TRANSACTION_TYPEHASH()": FunctionFragment;
    "avatar()": FunctionFragment;
    "cancelProposals(uint256[])": FunctionFragment;
    "changeDecisionExecutorL2(uint256)": FunctionFragment;
    "decisionExecutorL2()": FunctionFragment;
    "executeProposalTx(uint256,address,uint256,bytes,uint8)": FunctionFragment;
    "executeProposalTxBatch(uint256,address[],uint256[],bytes[],uint8[])": FunctionFragment;
    "generateTransactionHashData(address,uint256,bytes,uint8,uint256)": FunctionFragment;
    "getGuard()": FunctionFragment;
    "getNumOfTxInProposal(uint256)": FunctionFragment;
    "getProposalState(uint256)": FunctionFragment;
    "getTransactionHash(address,uint256,bytes,uint8)": FunctionFragment;
    "getTxHash(uint256,uint256)": FunctionFragment;
    "guard()": FunctionFragment;
    "isFinalizedProposalRecieved(uint256,uint256)": FunctionFragment;
    "isTxExecuted(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "proposalIndex()": FunctionFragment;
    "proposalIndexToProposalExecution(uint256)": FunctionFragment;
    "recieveProposalTest(uint256,uint256,bytes32[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAvatar(address)": FunctionFragment;
    "setGuard(address)": FunctionFragment;
    "setTarget(address)": FunctionFragment;
    "setUp(bytes)": FunctionFragment;
    "starknetCore()": FunctionFragment;
    "target()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSACTION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelProposals",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "changeDecisionExecutorL2",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decisionExecutorL2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposalTx",
    values: [BigNumberish, string, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposalTxBatch",
    values: [
      BigNumberish,
      string[],
      BigNumberish[],
      BytesLike[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "generateTransactionHashData",
    values: [string, BigNumberish, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getGuard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getNumOfTxInProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionHash",
    values: [string, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTxHash",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "guard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isFinalizedProposalRecieved",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTxExecuted",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalIndexToProposalExecution",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recieveProposalTest",
    values: [BigNumberish, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setAvatar", values: [string]): string;
  encodeFunctionData(functionFragment: "setGuard", values: [string]): string;
  encodeFunctionData(functionFragment: "setTarget", values: [string]): string;
  encodeFunctionData(functionFragment: "setUp", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "starknetCore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "target", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSACTION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeDecisionExecutorL2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decisionExecutorL2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposalTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposalTxBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateTransactionHashData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGuard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumOfTxInProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTxHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isFinalizedProposalRecieved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTxExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalIndexToProposalExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recieveProposalTest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAvatar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGuard", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTarget", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "starknetCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AvatarSet(address,address)": EventFragment;
    "ChangedDecisionExecutorL2(uint256)": EventFragment;
    "ChangedGuard(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProposalCancelled(uint256)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
    "ProposalReceived(uint256)": EventFragment;
    "SnapshotXL1ExecutorSetUpComplete(address,address,address,address,uint256,address)": EventFragment;
    "TargetSet(address,address)": EventFragment;
    "TransactionExecuted(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AvatarSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedDecisionExecutorL2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedGuard"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalReceived"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SnapshotXL1ExecutorSetUpComplete"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TargetSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionExecuted"): EventFragment;
}

export type AvatarSetEvent = TypedEvent<
  [string, string] & { previousAvatar: string; newAvatar: string }
>;

export type ChangedDecisionExecutorL2Event = TypedEvent<
  [BigNumber] & { _decisionExecutorL2: BigNumber }
>;

export type ChangedGuardEvent = TypedEvent<[string] & { guard: string }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ProposalCancelledEvent = TypedEvent<
  [BigNumber] & { proposalIndex: BigNumber }
>;

export type ProposalExecutedEvent = TypedEvent<
  [BigNumber] & { proposalIndex: BigNumber }
>;

export type ProposalReceivedEvent = TypedEvent<
  [BigNumber] & { proposalIndex: BigNumber }
>;

export type SnapshotXL1ExecutorSetUpCompleteEvent = TypedEvent<
  [string, string, string, string, BigNumber, string] & {
    initiator: string;
    _owner: string;
    _avatar: string;
    _target: string;
    _decisionExecutorL2: BigNumber;
    _starknetCore: string;
  }
>;

export type TargetSetEvent = TypedEvent<
  [string, string] & { previousTarget: string; newTarget: string }
>;

export type TransactionExecutedEvent = TypedEvent<
  [BigNumber, string] & { proposalIndex: BigNumber; txHash: string }
>;

export class SnapshotXL1Executor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SnapshotXL1ExecutorInterface;

  functions: {
    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    avatar(overrides?: CallOverrides): Promise<[string]>;

    cancelProposals(
      _proposalIndexes: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeDecisionExecutorL2(
      _decisionExecutorL2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decisionExecutorL2(overrides?: CallOverrides): Promise<[BigNumber]>;

    executeProposalTx(
      _proposalIndex: BigNumberish,
      target: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeProposalTxBatch(
      _proposalIndex: BigNumberish,
      targets: string[],
      values: BigNumberish[],
      data: BytesLike[],
      operations: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    generateTransactionHashData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGuard(overrides?: CallOverrides): Promise<[string] & { _guard: string }>;

    getNumOfTxInProposal(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProposalState(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getTransactionHash(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTxHash(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    guard(overrides?: CallOverrides): Promise<[string]>;

    isFinalizedProposalRecieved(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTxExecuted(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposalIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalIndexToProposalExecution(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { executionCounter: BigNumber; cancelled: boolean }
    >;

    recieveProposalTest(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      _txHashes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAvatar(
      _avatar: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGuard(
      _guard: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTarget(
      _target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUp(
      initParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    starknetCore(overrides?: CallOverrides): Promise<[string]>;

    target(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  avatar(overrides?: CallOverrides): Promise<string>;

  cancelProposals(
    _proposalIndexes: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeDecisionExecutorL2(
    _decisionExecutorL2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decisionExecutorL2(overrides?: CallOverrides): Promise<BigNumber>;

  executeProposalTx(
    _proposalIndex: BigNumberish,
    target: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeProposalTxBatch(
    _proposalIndex: BigNumberish,
    targets: string[],
    values: BigNumberish[],
    data: BytesLike[],
    operations: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  generateTransactionHashData(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getGuard(overrides?: CallOverrides): Promise<string>;

  getNumOfTxInProposal(
    _proposalIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProposalState(
    _proposalIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getTransactionHash(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getTxHash(
    _proposalIndex: BigNumberish,
    txIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  guard(overrides?: CallOverrides): Promise<string>;

  isFinalizedProposalRecieved(
    execution_details: BigNumberish,
    hasPassed: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTxExecuted(
    _proposalIndex: BigNumberish,
    txIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposalIndex(overrides?: CallOverrides): Promise<BigNumber>;

  proposalIndexToProposalExecution(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean] & { executionCounter: BigNumber; cancelled: boolean }
  >;

  recieveProposalTest(
    execution_details: BigNumberish,
    hasPassed: BigNumberish,
    _txHashes: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAvatar(
    _avatar: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGuard(
    _guard: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTarget(
    _target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUp(
    initParams: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  starknetCore(overrides?: CallOverrides): Promise<string>;

  target(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    avatar(overrides?: CallOverrides): Promise<string>;

    cancelProposals(
      _proposalIndexes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    changeDecisionExecutorL2(
      _decisionExecutorL2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decisionExecutorL2(overrides?: CallOverrides): Promise<BigNumber>;

    executeProposalTx(
      _proposalIndex: BigNumberish,
      target: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeProposalTxBatch(
      _proposalIndex: BigNumberish,
      targets: string[],
      values: BigNumberish[],
      data: BytesLike[],
      operations: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    generateTransactionHashData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getGuard(overrides?: CallOverrides): Promise<string>;

    getNumOfTxInProposal(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalState(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getTransactionHash(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getTxHash(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    guard(overrides?: CallOverrides): Promise<string>;

    isFinalizedProposalRecieved(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTxExecuted(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposalIndex(overrides?: CallOverrides): Promise<BigNumber>;

    proposalIndexToProposalExecution(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { executionCounter: BigNumber; cancelled: boolean }
    >;

    recieveProposalTest(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      _txHashes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAvatar(_avatar: string, overrides?: CallOverrides): Promise<void>;

    setGuard(_guard: string, overrides?: CallOverrides): Promise<void>;

    setTarget(_target: string, overrides?: CallOverrides): Promise<void>;

    setUp(initParams: BytesLike, overrides?: CallOverrides): Promise<void>;

    starknetCore(overrides?: CallOverrides): Promise<string>;

    target(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AvatarSet(address,address)"(
      previousAvatar?: string | null,
      newAvatar?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousAvatar: string; newAvatar: string }
    >;

    AvatarSet(
      previousAvatar?: string | null,
      newAvatar?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousAvatar: string; newAvatar: string }
    >;

    "ChangedDecisionExecutorL2(uint256)"(
      _decisionExecutorL2?: null
    ): TypedEventFilter<[BigNumber], { _decisionExecutorL2: BigNumber }>;

    ChangedDecisionExecutorL2(
      _decisionExecutorL2?: null
    ): TypedEventFilter<[BigNumber], { _decisionExecutorL2: BigNumber }>;

    "ChangedGuard(address)"(
      guard?: null
    ): TypedEventFilter<[string], { guard: string }>;

    ChangedGuard(guard?: null): TypedEventFilter<[string], { guard: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "ProposalCancelled(uint256)"(
      proposalIndex?: null
    ): TypedEventFilter<[BigNumber], { proposalIndex: BigNumber }>;

    ProposalCancelled(
      proposalIndex?: null
    ): TypedEventFilter<[BigNumber], { proposalIndex: BigNumber }>;

    "ProposalExecuted(uint256)"(
      proposalIndex?: null
    ): TypedEventFilter<[BigNumber], { proposalIndex: BigNumber }>;

    ProposalExecuted(
      proposalIndex?: null
    ): TypedEventFilter<[BigNumber], { proposalIndex: BigNumber }>;

    "ProposalReceived(uint256)"(
      proposalIndex?: null
    ): TypedEventFilter<[BigNumber], { proposalIndex: BigNumber }>;

    ProposalReceived(
      proposalIndex?: null
    ): TypedEventFilter<[BigNumber], { proposalIndex: BigNumber }>;

    "SnapshotXL1ExecutorSetUpComplete(address,address,address,address,uint256,address)"(
      initiator?: string | null,
      _owner?: string | null,
      _avatar?: string | null,
      _target?: null,
      _decisionExecutorL2?: null,
      _starknetCore?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, string],
      {
        initiator: string;
        _owner: string;
        _avatar: string;
        _target: string;
        _decisionExecutorL2: BigNumber;
        _starknetCore: string;
      }
    >;

    SnapshotXL1ExecutorSetUpComplete(
      initiator?: string | null,
      _owner?: string | null,
      _avatar?: string | null,
      _target?: null,
      _decisionExecutorL2?: null,
      _starknetCore?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, string],
      {
        initiator: string;
        _owner: string;
        _avatar: string;
        _target: string;
        _decisionExecutorL2: BigNumber;
        _starknetCore: string;
      }
    >;

    "TargetSet(address,address)"(
      previousTarget?: string | null,
      newTarget?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousTarget: string; newTarget: string }
    >;

    TargetSet(
      previousTarget?: string | null,
      newTarget?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousTarget: string; newTarget: string }
    >;

    "TransactionExecuted(uint256,bytes32)"(
      proposalIndex?: null,
      txHash?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { proposalIndex: BigNumber; txHash: string }
    >;

    TransactionExecuted(
      proposalIndex?: null,
      txHash?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { proposalIndex: BigNumber; txHash: string }
    >;
  };

  estimateGas: {
    DOMAIN_SEPARATOR_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSACTION_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    avatar(overrides?: CallOverrides): Promise<BigNumber>;

    cancelProposals(
      _proposalIndexes: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeDecisionExecutorL2(
      _decisionExecutorL2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decisionExecutorL2(overrides?: CallOverrides): Promise<BigNumber>;

    executeProposalTx(
      _proposalIndex: BigNumberish,
      target: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeProposalTxBatch(
      _proposalIndex: BigNumberish,
      targets: string[],
      values: BigNumberish[],
      data: BytesLike[],
      operations: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    generateTransactionHashData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGuard(overrides?: CallOverrides): Promise<BigNumber>;

    getNumOfTxInProposal(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalState(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionHash(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTxHash(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guard(overrides?: CallOverrides): Promise<BigNumber>;

    isFinalizedProposalRecieved(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTxExecuted(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposalIndex(overrides?: CallOverrides): Promise<BigNumber>;

    proposalIndexToProposalExecution(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recieveProposalTest(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      _txHashes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAvatar(
      _avatar: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGuard(
      _guard: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTarget(
      _target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUp(
      initParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    starknetCore(overrides?: CallOverrides): Promise<BigNumber>;

    target(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TRANSACTION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelProposals(
      _proposalIndexes: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeDecisionExecutorL2(
      _decisionExecutorL2: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decisionExecutorL2(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeProposalTx(
      _proposalIndex: BigNumberish,
      target: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeProposalTxBatch(
      _proposalIndex: BigNumberish,
      targets: string[],
      values: BigNumberish[],
      data: BytesLike[],
      operations: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    generateTransactionHashData(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumOfTxInProposal(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalState(
      _proposalIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionHash(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTxHash(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isFinalizedProposalRecieved(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTxExecuted(
      _proposalIndex: BigNumberish,
      txIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalIndexToProposalExecution(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recieveProposalTest(
      execution_details: BigNumberish,
      hasPassed: BigNumberish,
      _txHashes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAvatar(
      _avatar: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGuard(
      _guard: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTarget(
      _target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUp(
      initParams: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    starknetCore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    target(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
