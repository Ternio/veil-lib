'use strict';

var vcore = module.exports;

// module information
vcore.version = 'v' + require('./package.json').version;
vcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of vcore-lib found. ' +
      'Please make sure to require vcore-lib and check that submodules do' +
      ' not also include their own vcore-lib dependency.';
    throw new Error(message);
  }
};
vcore.versionGuard(global._vcore);
global._vcore = vcore.version;

// crypto
vcore.crypto = {};
vcore.crypto.BN = require('./lib/crypto/bn');
vcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
vcore.crypto.Hash = require('./lib/crypto/hash');
vcore.crypto.Random = require('./lib/crypto/random');
vcore.crypto.Point = require('./lib/crypto/point');
vcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
vcore.encoding = {};
vcore.encoding.Base58 = require('./lib/encoding/base58');
vcore.encoding.Base58Check = require('./lib/encoding/base58check');
vcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
vcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
vcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
vcore.util = {};
vcore.util.buffer = require('./lib/util/buffer');
vcore.util.js = require('./lib/util/js');
vcore.util.preconditions = require('./lib/util/preconditions');
vcore.util.AddrUtils = require('./lib/util/addr_utils');

// errors thrown by the library
vcore.errors = require('./lib/errors');

// main bitcoin library
vcore.Address = require('./lib/address');
vcore.Block = require('./lib/block');
vcore.MerkleBlock = require('./lib/block/merkleblock');
vcore.BlockHeader = require('./lib/block/blockheader');
vcore.HDPrivateKey = require('./lib/hdprivatekey.js');
vcore.HDPublicKey = require('./lib/hdpublickey.js');
vcore.Networks = require('./lib/networks');
vcore.Opcode = require('./lib/opcode');
vcore.PrivateKey = require('./lib/privatekey');
vcore.PublicKey = require('./lib/publickey');
vcore.Script = require('./lib/script');
vcore.Transaction = require('./lib/transaction');
vcore.URI = require('./lib/uri');
vcore.Unit = require('./lib/unit');

// dependencies, subject to change
vcore.deps = {};
vcore.deps.bnjs = require('bn.js');
vcore.deps.bs58 = require('bs58');
vcore.deps.Buffer = Buffer;
vcore.deps.elliptic = require('elliptic');
vcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
vcore.Transaction.sighash = require('./lib/transaction/sighash');
