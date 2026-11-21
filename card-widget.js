/**
 * Interactive Profile Card State Machine & Helpers
 */

export const FRIENDSHIP_STATES = {
  STRANGER: 'Stranger',
  FRIEND: 'Friend'
};

export function toggleFriendshipState(currentStatus) {
  const isCurrentlyFriend = currentStatus?.toLowerCase() === 'friend';

  if (isCurrentlyFriend) {
    return {
      status: FRIENDSHIP_STATES.STRANGER,
      buttonText: 'Add Friend',
      buttonClass: 'btn-add',
      color: '#10b981'
    };
  }

  return {
    status: FRIENDSHIP_STATES.FRIEND,
    buttonText: 'Unfriend',
    buttonClass: 'btn-unfriend',
    color: '#ef4444'
  };
}

export function formatCursorCoordinates(clientX, clientY) {
  const x = Number.isFinite(clientX) ? Math.max(0, clientX) : 0;
  const y = Number.isFinite(clientY) ? Math.max(0, clientY) : 0;
  return {
    left: `${x}px`,
    top: `${y}px`
  };
}

export function getLikeAnimationFrames() {
  return [
    { scale: 0, opacity: 0, durationMs: 0 },
    { scale: 1, opacity: 0.8, durationMs: 200 },
    { scale: 1, opacity: 0.3, durationMs: 1000 },
    { scale: 0, opacity: 0, durationMs: 1200 }
  ];
}
