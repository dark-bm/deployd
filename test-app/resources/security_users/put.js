if (changed('displayName') && this.displayName == "$CHANGEPASSWORD") {
    dpd.securityusers.put(this.id, {password: 'changed'}, function() {});
}

this.isMe = isMe(this.id);

if(ctx.body.$NOCASCADE) cancel("shouldn't be here");