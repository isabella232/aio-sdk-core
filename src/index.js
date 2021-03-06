/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const Errors = require('@adobe/aio-lib-core-errors')
const Config = require('@adobe/aio-lib-core-config')
const TVMClient = require('@adobe/aio-lib-core-tvm')
const Logger = require('@adobe/aio-lib-core-logging')
const HttpClient = require('@adobe/aio-lib-core-networking')

/** @module @adobe/aio-sdk-core */
module.exports = {
  /**
   * The Config module of the Adobe I/O Core SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-core-config/blob/master/README.md|@adobe/aio-lib-core-config}
   */
  Config,
  /**
   * The Errors Module of the Adobe I/O Core SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-core-errors/blob/master/README.md|@adobe/aio-lib-core-errors}
   */
  Errors,
  /**
   *  The TVM client Module of the Adobe I/O Core SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-core-tvm/blob/master/README.md|@adobe/aio-lib-core-tvm}
   */
  TVMClient,
  /**
   *  The Logger Module of the Adobe I/O Core SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-core-logging/blob/master/README.md|@adobe/aio-lib-core-logging}
   */
  Logger,
  /**
   *  The Networking Module of the Adobe I/O Core SDK
   *
   * @see {@link https://github.com/adobe/aio-lib-core-networking/blob/master/README.md|@adobe/aio-lib-core-networking}
   */
  HttpClient
}
