Syncs Session variables with localStorage on the client only.

## api
// sets session key and localStorage
ReactiveStore.set(key, value);

// gets key-value from session (reactive!)
ReactiveStore.get(key); // equivalent to calling Session.get(key)

// put this in a config file so that you can initialize known keys from memory on load
ReactiveStore.setKeys([key1, key2])

// Load all keys from localStorage and copy to session
ReactiveStore.init()
