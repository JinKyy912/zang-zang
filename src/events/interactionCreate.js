// ===============================
// MUSIC BOT ROLE LOCK
// ===============================

const MUSIC_ALLOWED_ROLES = [
  "1377478486461255760",
  "1377478486461255760",
];

if (command.category === "Music") {
  const hasMusicRole = interaction.member.roles.cache.some(role =>
    MUSIC_ALLOWED_ROLES.includes(role.id)
  );

  if (!hasMusicRole && !isBotOwner(interaction.user.id)) {
    throw createError(
      "User does not have music role permission",
      ErrorTypes.PERMISSION,
      "❌ Bạn cần role DJ để sử dụng bot music.",
      withTraceContext({
        commandName: interaction.commandName,
        userId: interaction.user.id,
      }, interactionTraceContext)
    );
  }
}
