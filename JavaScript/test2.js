/**
 * Cache to store results from elastic search
 * 
 * Elastic search when request data, will reserve a snapshot of the entire data set and only return part of it.
 * 
 * User of ES can request more data with a scroll ID.
 * ScrollID is return from each ES request. 
 * 
 * Subsequent request with a scrollID will return a new scrollID for the next scroll
 * 
 * Each scroll can only return N number of entries since last scroll. Only can scroll forward.
 * 
 * When scroll will return less than or equal to N number of entries for the last scroll 
 * 
 * for example, total number of entries in ES snapshot is 10,100
 * 
 * N = 200
 * 
 * 1st scroll (null) returns entries 1 to 200 with scrollId A
 * 2nd scroll (A) returns entries 201 to 400 with scrollId B
 * ...
 * 50th scroll (X) returns entries 9801 to 10,000 with scrollId X+1
 * 51th scroll (X+1) returns entries 10,001 to 10,100 with scrollId null
 * 
 * 
 * You can getPage from the cache for any range defined by offset and size for a given snapshot defined by the latest scrollId.
 * 
 * if there is enough data, return them
 * else return undefined
 * 
 */

 interface IScrollCache {
    // Populate cache
    scroll(oldScrollId: string | undefined, newScrollId: string, total: number, data: Order[]): void
    
    // Retrieves from cache
    getPage(scrollId: string, offset: number, size: number): Order[] | undefined
}


class ImpIScrollCache implements IScrollCache {
    cashObject = [];
    scroll(oldScrollId: string | undefined, newScrollId: string, total: number, data: Order[]) {
        cashObject.push(data);
    }
    
    getPage(scrollId: string, offset: number, size: number): Order[] | undefined {
        // const keyArray = Object.key(cashObject);
        // const data = cashObject[scrollId];
        // limit 0 20, 20 20, 30 20
        return cashObject.slice(offset, offset+size);
    }
}