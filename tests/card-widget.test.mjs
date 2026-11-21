import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  FRIENDSHIP_STATES,
  toggleFriendshipState,
  formatCursorCoordinates,
  getLikeAnimationFrames
} from '../card-widget.js';

describe('Interactive Card Widget State Machine', () => {
  test('transitions from stranger to friend', () => {
    const next = toggleFriendshipState(FRIENDSHIP_STATES.STRANGER);
    assert.equal(next.status, 'Friend');
    assert.equal(next.buttonText, 'Unfriend');
    assert.equal(next.color, '#ef4444');
  });

  test('transitions from friend to stranger', () => {
    const next = toggleFriendshipState(FRIENDSHIP_STATES.FRIEND);
    assert.equal(next.status, 'Stranger');
    assert.equal(next.buttonText, 'Add Friend');
    assert.equal(next.color, '#10b981');
  });

  test('handles null or case-insensitive status safely', () => {
    const next1 = toggleFriendshipState(null);
    assert.equal(next1.status, 'Friend');

    const next2 = toggleFriendshipState('fRiEnD');
    assert.equal(next2.status, 'Stranger');
  });

  test('formatCursorCoordinates formats px coordinates and clamps negatives', () => {
    assert.deepEqual(formatCursorCoordinates(150, 300), { left: '150px', top: '300px' });
    assert.deepEqual(formatCursorCoordinates(-20, -5), { left: '0px', top: '0px' });
    assert.deepEqual(formatCursorCoordinates(NaN, undefined), { left: '0px', top: '0px' });
  });

  test('getLikeAnimationFrames returns keyframe sequences', () => {
    const frames = getLikeAnimationFrames();
    assert.equal(frames.length, 4);
    assert.equal(frames[0].scale, 0);
    assert.equal(frames[1].scale, 1);
    assert.equal(frames[3].scale, 0);
  });
});
