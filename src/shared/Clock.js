/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import useTime from './useTime';

export default function Clock() {
  const time = useTime();
  return <p>Time: {time}</p>;
}
