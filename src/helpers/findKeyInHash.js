export default function findKeyInHash(key, value, hash) {
    return Object.keys(hash).find(id => hash[id][key] === value);
}